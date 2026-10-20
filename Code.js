function searchThreads(query, start, max){
  try{
    return GmailApp.search(query, start, max);
  }catch(e){
    console.warn(e, ...arguments);
    return [];
  }
}

function searchMessages(query, start, max){
  const messages = [];
  try{
    const threads = searchThreads(query, start, max);
    for(const thread of threads){
      try{
        for(const message of thread.getMessages()){
          try{
            messages.push(message);
          }catch(e){
            console.warn(e, message);
          }
        }
      }catch(e){
        console.warn(e, thread);
      }
    }
  }catch(e){
    console.warn(e,...arguments);
  }
  return messages;
}

function listNisd() {
  return searchMessages('from:@nisd.net newer_than:7d', 0, 50)
    .filter(m=>m?.getFrom?.()?.includes?.('@nisd.net'));
}
