export const teamQuery = `*[_type == 'user'] | order(_createdAt desc, _updatedAt asc) {
    profileImage{
      asset -> {
        url
      }
    },
    username,
    position,   
}`;
