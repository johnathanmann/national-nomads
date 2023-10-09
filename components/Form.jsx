import React from 'react'

const Form = ({
    type, post, setPost, submitting, handleSubmit
}) => {
    return(
        <section>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <textarea 
                        value={post.review} 
                        onChange={(e) => setPost({...post, review: e.target.value})}
                        placeholder="Your review here"
                        required
                    />
                </label>
                <button
                    type='submit'
                    disabled={submitting}
                >{submitting ? `${type}...`: type}</button>
            </form>
        </section>
    )
}

export default Form