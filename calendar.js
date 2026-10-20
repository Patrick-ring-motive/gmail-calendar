let calendar;
function eventExists(eventTitle,startTime,endTime) {
  const start = new Date(startTime).getTime();
  const end = new Date(endTime).getTime();
  calendar = calendar ?? CalendarApp.getDefaultCalendar();
  const events = calendar.getEvents(start, end);
  
  if(!events?.length){
    return false;
  }
  
  for(const event of events){
    const title = event.getTitle();
    if(start == event.getStartTime().getTime() && end == event.getEndTime().getTime() && lcsMatch(title,eventTitle)){
      return true;
    } 
  }
  return false;
}
