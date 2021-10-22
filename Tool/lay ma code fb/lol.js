const postID = '4387428904674656'; // 'https://www.facebook.com/LienMinhHuyenThoai/posts/4387428904674656'
const accessToken = 'EAAAAZAw4FxQIBAJRHQfuhWgbWfQ2XW8JfqUXDCAs191edKNXe29VbcpZAJNZARZAtVUxwZBMZBLr3XvLLlLbE0VCVQIStg00mIRi02B6QQOtpQZCgZB3izM8QZC7Lyr9ADldFhhm4JLZBYY3G7g6JIR1etGqZBefZAZBvrWuMNm1xZClZCDgvNcZCJ8POWMcKxWfZByyjOHYZD'; // find 'EAAA' at 'https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed'
const url = 'https://graph.facebook.com/' + postID + '/comments?fields=message&access_token=' + accessToken;
const analyze_comments = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((results) => {
      if (results) {
        const comments = results.data;
        comments.forEach((comment) => {
          const message = comment.message.trim();
          if (message.length > 0 && message.includes('LOL')) {
            let startIndex = message.indexOf('LOL');
            let code = message.substr(startIndex, 13);
            console.log(code);
          }
        });
        if (typeof results.paging.next !== 'undefined') {
          analyze_comments(results.paging.next);
        } else {
          console.log('Done!');
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
analyze_comments(url);