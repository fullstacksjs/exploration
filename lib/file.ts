fetch('https://graphql.datocms.com/preview', {
  headers: {
    accept: 'application/json',
    'accept-language': 'en-US,en;q=0.9',
    authorization: 'Bearer 631313a24e9ce35b074d4b72a3473c',
    'content-type': 'application/json',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'sec-gpc': '1',
  },
  referrerPolicy: 'same-origin',
  body: '{"query":"{\\n  allTopics {\\n    id\\n    title\\n    lecturers {\\n      id\\n      name\\n      avatar {\\n        id\\n        responsiveImage {\\n          alt\\n          base64\\n          bgColor\\n          title\\n          src\\n          srcSet\\n        }\\n      }\\n    }\\n    _status\\n    _firstPublishedAt\\n  }\\n  _allTopicsMeta {\\n    count\\n  }\\n}\\n","variables":null}',
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
});
