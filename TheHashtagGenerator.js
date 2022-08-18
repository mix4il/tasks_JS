function generateHashtag (str) {
  const hashStr = str.split(' ').join('');
  if(hashStr === ''){
    return false;
  };
  const resultStr = ['#', ...str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))].join('');
  return resultStr.length > 140 ? false : resultStr;
}

  console.log(generateHashtag("Do we have A Hashtag"))


