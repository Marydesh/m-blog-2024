const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blogpost-title').value.trim();
  const content = document.querySelector('#blogpost-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogposts`, {
      method: 'POST',
      body: JSON.stringify({ title,content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      location.href = '/profile'
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blogpost');
    }
  }
};

document
  .querySelector('.new-blogpost-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelectorAll('.delete')
  .forEach(btn => {
    btn.addEventListener('click', delButtonHandler);
  })
