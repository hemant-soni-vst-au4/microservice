import React from 'react'

function PostCreate() {
  return (
    <div>
        <form>
            <div className="form-group">
                <lable>Title</lable>
                <input className="form-control" />

            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default PostCreate