const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000").replace(/\/$/, "");

export const fetchServices = async () => {
  const res = await fetch(`${API_BASE_URL}/api/modules/services`);

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const data = await res.json();

  return data.data || [];
};

export const fetchServiceBySlug = async (slug) => {
  const res = await fetch(`${API_BASE_URL}/api/modules/services/${slug}`);

  if (!res.ok) {
    throw new Error("Service not found");
  }

  const data = await res.json();
  return data.data;
};