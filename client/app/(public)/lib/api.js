export const fetchServices = async () => {
  const res = await fetch("http://localhost:5000/api/public/services");

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const data = await res.json();

  return data.data || [];
};

export const fetchServiceBySlug = async (slug) => {
  const res = await fetch(`http://localhost:5000/api/public/services/${slug}`);

  if (!res.ok) {
    throw new Error("Service not found");
  }

  const data = await res.json();
  return data.data;
};