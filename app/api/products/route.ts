import { NextResponse } from 'next/server';
import { loadProducts } from '../../lib/products';

export async function GET() {
  try {
    const products = loadProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error loading products:', error);
    return NextResponse.json(
      { error: 'Failed to load products' },
      { status: 500 }
    );
  }
} 