import { useEffect, useState } from "react";

const Notice = ({ele}) => {

  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('http://localhost:3002/users')
    .then(res => res.json()).then((data) => {
      data.map((el) => {
        if(ele.author_id===el.id){
          setAuthor(el.username)
        }
      })
    })
  },[])

  return (
    <div className="notice-container">
      {/* In below h3 tag, the text content should be title and inside the span tag the text content should be category */}
      <h3 className='notice-title'>{ele.title}<span>{ele.category}</span></h3>
       {/* In below p tag, the text content should be message and inside the span tag the text content should be authorname who posted it */}
      <p className='notice-message'>{ele.message}<span>- {author}</span></p>
      {/* add date of the post in below p tag */}
      <p className='notice-date'>{ele.date}</p>
    </div>
  )
}

export default Notice;