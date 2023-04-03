
  const searchBox = document.getElementById('search-box');
  const songList = document.getElementById('song-list');

  searchBox.addEventListener('keyup', () => {
    const searchTerm = searchBox.value.toLowerCase();

    
    Array.from(songList.children).forEach((song) => {
      const title = song.querySelector('h2').textContent.toLowerCase();

      
      if (title.includes(searchTerm)) {
        song.style.display = '';
      } else {
        song.style.display = 'none';
        song.style.overflow = 'hidden';
      }
    });
  });
