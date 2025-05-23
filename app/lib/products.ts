import fs from 'fs';
import path from 'path';

export type ProductCategory = {
  id: string;
  name: {
    tr: string;
    en: string;
  };
  image: string;
  products: Product[];
};

export type Product = {
  name: string;
  image: string;
};

// Map category names to their corresponding image numbers and IDs
const categoryMap: Record<string, { image: string; id: string }> = {
  'ÇAY MAKİNASI REZİSTANSLARI': { image: '1', id: 'tea-machine' },
  'FRİTÖZ REZİSTANSLARI': { image: '2', id: 'deep-fryer' },
  'TOST VE IZGARA REZİSTANSLARI': { image: '3', id: 'toaster-grill' },
  'BENMARİ REZİSTANSLARI': { image: '4', id: 'bain-marie' },
  'BOYLER REZİSTANSLARI': { image: '5', id: 'boiler' },
  'ÇAMAŞIR VE BULAŞIK MAKİNASI REZİSTANSLARI': { image: '6', id: 'washing-dishwasher' },
  'ÇUBUK REZİSTANSILARI': { image: '7', id: 'straight' },
  'FIRIN REZİSTANSLARI': { image: '8', id: 'oven' },
  'SERPANTİNLİ REZİSTANSLAR': { image: '9', id: 'finned' },
  'ÜTÜ REZİSTANSLARI': { image: '10', id: 'iron' },
  'TEKNİK MALZEMELER': { image: '11', id: 'technical' }
};

// Function to normalize category names (remove any potential hidden characters)
function normalizeString(str: string): string {
  return str
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Function to remove duplicate products
function deduplicateProducts(products: Array<{ name: string; saved_image_path: string; }>): Array<{ name: string; saved_image_path: string; }> {
  const seen = new Set<string>();
  return products.filter(product => {
    // Normalize the product name to handle slight differences in spacing/case
    const normalizedName = normalizeString(product.name);
    if (seen.has(normalizedName)) {
      return false;
    }
    seen.add(normalizedName);
    return true;
  });
}

export function loadProducts(): ProductCategory[] {
  const dataPath = path.join(process.cwd(), 'public', 'output', 'data', 'all_products.json');
  const rawData = fs.readFileSync(dataPath, 'utf8');
  const data = JSON.parse(rawData) as Record<string, Array<{ name: string; saved_image_path: string; }>>;

  // Create a map of normalized names to category data
  const normalizedCategoryMap = Object.entries(categoryMap).reduce((acc, [key, value]) => {
    acc[normalizeString(key)] = value;
    return acc;
  }, {} as Record<string, { image: string; id: string }>);

  return Object.entries(data).map(([categoryName, products]) => {
    // Get the category data using normalized name
    const normalizedName = normalizeString(categoryName);
    const categoryData = normalizedCategoryMap[normalizedName];

    if (!categoryData) {
      console.warn(`No mapping found for category: ${categoryName} (normalized: ${normalizedName})`);
    }

    // Remove duplicate products
    const uniqueProducts = deduplicateProducts(products);

    return {
      id: categoryData?.id || categoryName.toLowerCase()
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''),
      name: {
        tr: categoryName,
        en: categoryName
          .replace('REZİSTANSLARI', 'HEATING ELEMENTS')
          .replace('REZİSTANSLAR', 'HEATING ELEMENTS')
          .replace('REZİSTANSILARI', 'HEATING ELEMENTS')
          .replace('VE', 'AND')
          .replace('ÇAMAŞIR', 'WASHING MACHINE')
          .replace('BULAŞIK', 'DISHWASHER')
          .replace('BOYLER', 'BOILER')
          .replace('BENMARİ', 'BAIN-MARIE')
          .replace('TOST', 'TOASTER')
          .replace('IZGARA', 'GRILL')
          .replace('FIRIN', 'OVEN')
          .replace('ÇUBUK', 'STRAIGHT')
          .replace('SERPANTİNLİ', 'SERPENTINE')
          .replace('ÜTÜ', 'IRON')
          .replace('TEKNİK MALZEMELER', 'TECHNICAL MATERIALS')
          .replace('ÇAY', 'TEA')
          .replace('MAKİNASI', 'MACHINE')
      },
      image: `/${categoryData?.image || '1'}.png`,
      products: uniqueProducts.map(product => ({
        name: product.name,
        image: `/output/images/${product.saved_image_path.split('/').pop()}`
      }))
    };
  });
} 