export const formatServices = (services) => {
  const map = {};
  const roots = [];

  // Step 1: map all services
  services.forEach((service) => {
    map[service._id] = {
      title: service.name,
      slug: service.slug,
      children: [],
      parent: service.parent?._id || null,
    };
  });

  // Step 2: build tree
  services.forEach((service) => {
    const item = map[service._id];

    if (item.parent) {
      map[item.parent]?.children.push(item);
    } else {
      roots.push(item);
    }
  });

  return roots;
};