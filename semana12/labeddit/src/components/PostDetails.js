import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { Button, TextField} from '@material-ui/core'


export default function PostDetails() {

    const pathParams = useParams();
    const id = pathParams.id;

    const [postDetails, setPostDetails] = useState([])
    const [postComments, setPostComments] = useState([])
    const [commentText, setCommentText] = useState('');

    const handleCommentText = (event) => {
        setCommentText(event.target.value);
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        comment()  
    }

    useEffect(() => {
        getPostDetails();
    }, [])

    const comment = () => {
        const token = localStorage.getItem("token")
        const body = {
            "text": commentText
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment`, body, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            alert("Comentário feito com sucesso!")
            setCommentText("");
            getPostDetails()
        })
    }

    const likeComment = (commentId) => {
        const token = localStorage.getItem("token")
        const body = {
            "direction": 1
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment/${commentId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            getPostDetails();
        })
    }

    const getPostDetails = () => {
        const token = localStorage.getItem("token")

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            setPostDetails(res.data.post)
            setPostComments(res.data.post.comments)
            console.log(postDetails)
        })
    }

  

    return (
        <Container>
             <PostCard>
                        <h3>{postDetails.title}</h3>
                        <h4>Autor: {postDetails.username}</h4>
                        <p>{postDetails.text}</p>
                        <ReactionsContainer>

                            <IconContainer >
                                <StyledImg src="https://www.flaticon.com/svg/static/icons/svg/686/686308.svg"/>
                                <p>{postDetails.votesCount}</p>
                            </IconContainer>

                            <IconContainer>
                                <StyledImg src="https://www.flaticon.com/svg/static/icons/svg/1380/1380338.svg"/>
                                <p>{postDetails.commentsCount}</p>
                            </IconContainer>

                        </ReactionsContainer>
                       
                    </PostCard>

            <StyledForm onSubmit={handleSubmission}>
                <textarea  required
                    placeholder="Digite seu comentário"               
                    value={commentText}
                    onChange={handleCommentText} />

                <Button 
                    className='styled-button'
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Comentar
                </Button>
            </StyledForm>
                    <h4>Comentários</h4>

                    {postComments.map(comment => {
                        return (
                            <CommentContainer key={comment.id}>
                                <p>{comment.text}</p>
                                <ReactionsContainer>

                                <IconContainer >
                                    <StyledImg  onClick={() => likeComment(comment.id)} src="https://www.flaticon.com/svg/static/icons/svg/686/686308.svg"/>
                                    <p>{comment.votesCount}</p>
                                </IconContainer>
                                <h5>{comment.username}</h5>
                                </ReactionsContainer>
                                
                            </CommentContainer>
                        )
                    })}
        </Container>
    )
}


const Container = styled.div `
    display: flex;
    margin-top: 15vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PostCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    margin: 1.2rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    text-align: center;
    overflow: hidden;
    padding: 1.1rem;
`

const ReactionsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const IconContainer = styled.div`
    display: flex;
`

const StyledImg = styled.img`
    height: 2rem;
    &:hover{
        cursor: pointer;
    }
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    textarea {
        resize: none;
        margin: 1.2rem;
        width: 40vw;
        height: 20vh;
    }
    .styled-button {
        position: static;
    }
    
`

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    text-align: center;
    overflow: hidden;
    padding: 1rem;
    margin: 1rem;
   
`