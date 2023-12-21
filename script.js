document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addBookmark');
  const bookmarkList = document.getElementById('bookmarkList');
  const topicMenu = document.getElementById('topic');

  // Fetch topics from database to populate the dropdown menu
  fetch('/topics')
    .then(response => response.json())
    .then(topics => {
      topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic.id;
        option.textContent = topic.title;
        topicDropdown.appendChild(option);
      });
    })
    .catch(error => console.error('Error fetching topics:', error));

  // Fetch bookmarks from database and render them
  const fetchBookmarks = () => {
    fetch('/bookmarks')
      .then(response => response.json())
      .then(bookmarks => {
        renderBookmarks(bookmarks);
      })
      .catch(error => console.error('Error fetching bookmarks:', error));
  };

  // render bookmarks
  const renderBookmarks = (bookmarks) => {
    bookmarkList.innerHTML = '';
    bookmarks.forEach(bookmark => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
      <strong>${bookmark.title}</strong>
      <p>${bookmark.description}</p>
      <a href="${$bookmark.url}" target="_blank">Visit Bookmark</a>
      <button onclick="editBookmark(${bookmark.id})">Edit</button>
      <button onclick="deleteBookmark(${bookmark.id})">Delete</button>
      `;
      bookmarkList.appendChild(listItem);
    });
  };

  // Edit bookmark
  const editBookmark = (id) => {
    fetch(`/bookmarks/${id}`)
      .then(response => response.json())
      .then(bookmark => {
        document.getElementById('title').value = bookmark.title;
        document.getElementById('url').value = bookmark.url;
        document.getElementById('description').value = bookmark.description;
        document.getElementById('topic').value = bookmark.topic_id;

        form.onsubmit = (event) => updateBookmark(event, id);
      })
      .catch(error => console.error('Error fetching bookmark details:', error));
  };

  const updateBookmark = (event, id) => {
    event.preventDefault();
    const formData = new FormData(form);
    fetch(`/bookmarks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then(response => {
        if (response.ok) {
          fetchBookmarks();
          form.reset();
          form.onsubmit = addBookmark;
        }
        else {
          console.error('Error updating bookmark:', response.statusText);
        }
      })
      .catch(error => console.error('Error updating bookmark:', error));
  };

  const deleteBookmark = (id) => {
    fetch(`/bookmarks/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          fetchBookmarks();
        }
        else {
          console.error('Error deleting bookmark:', response.statusText);
        }
      })
      .catch(error => console.error('Error deleting bookmark:', error));
  };

  const addBookmark = (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    fetch('/bookmarks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then(response => {
        if (response.ok) {
          fetchBookmarks();
          form.reset();
        }
        else {
          console.error('Error adding bookmark:', response.statusText);
        }
      })
      .catch(error => console.error('Error adding bookmark:', error));
  };

  form.onsubmit = addBookmark;

  fetchBookmarks();
});
