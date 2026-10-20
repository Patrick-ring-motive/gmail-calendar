function searchThreads(query, start, max){
  try{
    return GmailApp.search(query, start, max);
  }catch(e){
    console.warn(e, ...arguments);
    return [];
  }
}
