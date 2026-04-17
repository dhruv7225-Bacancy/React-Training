import { useEffect, useRef, useState } from "react";
import { fakeReviews } from "./reviews";

type Review = {
  id: number,
  title: string,
  description: string,
  upvotes: number,
  downvotes: number
}
const App = () => {
  const [reviews, setReviews] = useState<Review[]>(fakeReviews.sort((a, b) => b.upvotes - a.upvotes));
  const [addShow, setAddShow] = useState<boolean>(false)
  const titleRef = useRef<HTMLInputElement>(null);
  const disRef = useRef<HTMLInputElement>(null);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const updateRef = useRef<number>(0)

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.value = ""
    }
    if (disRef.current) {
      disRef.current.value = ""
    }
  }, [reviews])

  function upvote(id: number) {
    setReviews(
      prev => prev
        .map(review => {
          if (review.id === id) {
            review.upvotes++
          }
          return review
        })
        .sort((a, b) => b.upvotes - a.upvotes)
    )
  }

  function downvote(id: number) {
    setReviews(
      prev => prev
        .map(review => {
          if (review.id === id) {
            review.downvotes++
          }
          return review
        })
        .sort()
    )
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (!titleRef.current?.value) {
      alert("title can't be null")
      return
    }
    if (!disRef.current?.value) {
      alert("description can't be null")
      return
    }
    console.log(disRef.current?.value);

    setReviews((prev) => [...prev, {
      id: Number(reviews.toSorted((a, b) => b.id - a.id)[0].id) + 1,
      title: String(titleRef.current?.value),
      description: String(disRef.current?.value),
      upvotes: 0,
      downvotes: 0
    }])

  }

  function update(id: number) {
    setIsUpdate(true)
    setAddShow(true)
    updateRef.current = id
  }

  function handleUpdate(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setReviews((prev) => prev.map((review) => {
      if (review.id === updateRef.current) {
        return {
          ...review,
          title: titleRef.current?.value || "",
          description: disRef.current?.value || ""
        }
      }
      return review
    }))
  }

  return (
    <>
      <div>
        <button onClick={() => setAddShow(true)}>add review</button>
        {
          addShow &&
          (
            <div>
              <form >
                <div>
                  <label htmlFor="">Title: </label>
                  <input
                    type="text"
                    ref={titleRef}
                  />
                </div>
                <div>
                  <label htmlFor="">Discription: </label>
                  <input
                    type="text"
                    ref={disRef}
                  />
                </div>
                {
                  !isUpdate &&
                  <button onClick={handleClick}>submit</button> ||
                  <button onClick={handleUpdate}>update</button>
                }
              </form>
            </div>
          )
        }
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {
          reviews.map((review) => (
            <div key={review.id} style={{ width: "300px", border: "2px solid black", margin: "20px", padding: "10px" }}>
              <p>{review.title}</p>
              <p>{review.description}</p>
              <button onClick={() => upvote(review.id)}>⬆ {review.upvotes}</button>
              <button onClick={() => downvote(review.id)}>⬇ {review.downvotes}</button>
              <button onClick={() => update(review.id)}>update</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
