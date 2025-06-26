import EventsWrapper from "@/components/events/EventsWrapper";


function Events() {

  return (
    <div className="container">

        <h4 className="text-white-color text-[20px] md:text-[25px] text-center mb-[90px] font-bold  leading-9 md:leading-11.5">نگاهی به <span className="text-orange">رویداد</span>های مهم اوستا هوش‌یار</h4>
        <div>
            <EventsWrapper/>
        </div>
    </div>
  )
}

export default Events