/*
<div class="post-item">
      <img
        src="https://i.pinimg.com/564x/75/66/c2/7566c2f881e7ca9f2a5cedccbc9340f8.jpg"
        alt=""
      />
      <div>
        <h2>Tiêu đề 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
          doloribus reiciendis? Distinctio autem aut unde quos molestiae ullam
          temporibus facilis quia magni sed eveniet assumenda, nemo mollitia
          deleniti similique cupiditate.
        </p>
      </div>
    </div>


*/

var posts = [
  {
    img: "https://i.pinimg.com/564x/75/66/c2/7566c2f881e7ca9f2a5cedccbc9340f8.jpg",
    title: "Tiêu đề 1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,doloribus reiciendis? Distinctio autem aut unde quos molestiae ullam temporibus facilis quia magni sed eveniet assumenda, nemo mollitiadeleniti similique cupiditate.",
  },
  {
    img: "https://i.pinimg.com/564x/75/66/c2/7566c2f881e7ca9f2a5cedccbc9340f8.jpg",
    title: "Tiêu đề 2",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,doloribus reiciendis? Distinctio autem aut unde quos molestiae ullam temporibus facilis quia magni sed eveniet assumenda, nemo mollitiadeleniti similique cupiditate.",
  },
  {
    img: "https://i.pinimg.com/564x/75/66/c2/7566c2f881e7ca9f2a5cedccbc9340f8.jpg",
    title: "Tiêu đề 3",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,doloribus reiciendis? Distinctio autem aut unde quos molestiae ullam temporibus facilis quia magni sed eveniet assumenda, nemo mollitiadeleniti similique cupiditate.",
  },
  {
    img: "https://i.pinimg.com/564x/75/66/c2/7566c2f881e7ca9f2a5cedccbc9340f8.jpg",
    title: "Tiêu đề 4",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,doloribus reiciendis? Distinctio autem aut unde quos molestiae ullam temporibus facilis quia magni sed eveniet assumenda, nemo mollitiadeleniti similique cupiditate.",
  },
];

console.log(posts);
var html = `<div class="posts">
${posts
  .map(function (post, index) {
    return `<div class="post-item">
  
  <img
        src="${post.img}"
        alt=""
      />
      <div>
        <h2>${post.title}</h2>
        <p>
          ${post.content}
        </p>
      </div>`;
  })
  .join("")}
</div>
`;

document.write(html);
