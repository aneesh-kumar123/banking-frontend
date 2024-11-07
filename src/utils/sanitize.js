export const sanitiseObjectsForTable = (data) => {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    username: item.username,
    email: item.email,
    phone: item.phone,
    website: item.website,
    address_street: item.address.street,
    address_suite: item.address.suite,
    address_city: item.address.city,
    address_zipcode: item.address.zipcode,
    address_geo_lat: item.address.geo.lat,
    address_geo_lng: item.address.geo.lng,
    company_name: item.company.name,
    company_catchPhrase: item.company.catchPhrase,
    company_bs: item.company.bs
  }));
};