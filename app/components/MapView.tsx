function MapView() {
    return (
<div className="w-full h-[450px] my-20">
<iframe
  src="https://www.google.com/maps/embed?pb=!4v1746283015711!6m8!1m7!1sTvRioOsSRjMqO-Nkn9t1ew!2m2!1d41.0011643916423!2d28.68688380916835!3f145.0053503989134!4f0.5744656072449743!5f0.7820865974627469"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    );
  }
  
  export default MapView;