let calendar;
function eventExists(eventTitle,startTime,endTime) {
  calendar = calendar ?? CalendarApp.getDefaultCalendar();
  const events = calendar.getEvents(startTime, endTime);
  
  if(!events?.length){
    return false;
  }
  
  for(const event of events){
    const title = event.getTitle();
    const start = event.getStartTime();
    const end = event.getEndTime();
    if(start == startTime && end == endTime && lcsMatch(title,eventTitle)){
      return true;
    } 
  }
  return false;
}
