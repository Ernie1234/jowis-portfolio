export const teamQuery = `*[_type == 'user'] | order(_createdAt desc, _updatedAt asc) {
    profileImage{
      asset -> {
        url
      }
    },
    username,
    position,   
}`;
export const projectQuery = `*[_type == 'project'] | order(_createdAt desc, _updatedAt asc) {
    img{
      asset -> {
        url
      }
    },
    title,
    color,
    description,
    skills,
    url
}`;
export const testimonialQuery = `*[_type == 'testimonials'] | order(_createdAt desc, _updatedAt asc) {
    img{
      asset -> {
        url
      }
    },
    title,
    client,
    clientInfo,
}`;
export const galleryQuery = `*[_type == 'gallery'] | order(_createdAt desc, _updatedAt asc) {
    picture{
      asset -> {
        url
      }
    },
    title
}`;
