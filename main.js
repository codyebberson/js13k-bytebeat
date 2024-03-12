const html = [];
let songId = 1;
let currentSong = null;

songs.forEach(buildHtml);

document.getElementById("container").innerHTML = html.join("");

songs.forEach(attachEventListeners);

function buildHtml(song) {
  if (song.children) {
    html.push('<div class="group">');
    if (song.name) {
      html.push(escapeHtml(song.name));
    }
    if (song.name && song.author) {
      html.push("&nbsp;&middot;&nbsp;");
    }
    if (song.author) {
      html.push("by&nbsp;");
      html.push(formatAuthor(song.author));
    }
    html.push("</div>");
    song.children.forEach(buildHtml);
  } else {
    song.id = songId++;
    song.code = song.codeMinified || song.codeOriginal;
    song.url = Array.isArray(song.url) ? song.url[0] : song.url;

    html.push('<div class="entry">');
    html.push('<div class="details">');

    if (song.name) {
      html.push(`<a href="${escapeHtml(song.url)}">`);
      html.push(escapeHtml(song.name));
      html.push("</a>");
      html.push("&nbsp;&middot;&nbsp;");
    }

    if (song.author) {
      html.push("<span>");
      html.push(formatAuthor(song.author));
      html.push("</span>");
      html.push("&nbsp;&middot;&nbsp;");
    }

    if (song.date) {
      html.push("<span>");
      html.push(escapeHtml(song.date));
      html.push("</span>");
      html.push("&nbsp;&middot;&nbsp;");
    }

    html.push("<span>");
    html.push(song.code.length.toString());
    html.push("&nbsp;chars</span>");
    html.push("</div>");
    html.push("<pre>");
    html.push(`<a id="song${song.id}" href="#">`);
    html.push(escapeHtml(song.code));
    html.push("</a>");
    html.push("</pre>");
    html.push("</div>");
  }
}

function formatAuthor(author) {
  if (!author) {
    return "";
  }
  if (Array.isArray(author)) {
    return author.map(formatAuthor).join(", ");
  }
  return escapeHtml(author);
}

function escapeHtml(unsafe) {
  if (!unsafe) {
    return "";
  }
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function attachEventListeners(song) {
  if (song.children) {
    song.children.forEach(attachEventListeners);
  } else {
    document.getElementById(`song${song.id}`).addEventListener("click", (e) => {
      e.preventDefault();
      if (currentSong === song) {
        stop();
        currentSong = null;
      } else {
        play(song);
        currentSong = song;
      }
    });
  }
}
