import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useProtectedPage } from  '../hooks/useProtectedPage';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';


export default function Feed() {

    const [posts, setPosts] = useState([])
    const [postText, setPostText] = useState('')
    const [postTitle, setPostTitle] = useState('')

    const history = useHistory();

    const handlePostTitle = (event) => {
        setPostTitle(event.target.value);
    }
    const handlePostText = (event) => {
        setPostText(event.target.value);
    }


    const handleSubmission = (event) => {
        event.preventDefault()
        post()
        
    }

    const post = () => {

        const body = {
            "text": postText,
	        "title": postTitle
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", body, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            alert("post criado com sucesso")
            setPostTitle("")
            setPostText("")
            getPosts()
        })
    }


    useEffect(() => {
        getPosts();
    }, [])

    const logout = () => {
        localStorage.removeItem("token")
        history.push("/")
    }

    const vote = (postId) => {
        const token = localStorage.getItem("token")

        const body = {
            "direction" : 1
          };

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })

        .then((res) => {
            console.log(res);
            getPosts()
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    const getPosts = () => {
        const token = localStorage.getItem("token")

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",{
            headers: {
                Authorization: token
            }
        }
        )
        .then((res) => {
            setPosts(res.data.posts)
            console.log(posts)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    const goToDetails = (id) => {
        history.push(`/feed/${id}`);
      };

    const token = localStorage.getItem("token")
    useProtectedPage()

    return (
        <Container>
            <Button 
                    className='logout-button'
                    color="primary"
                    onClick={logout}
                >
                    Sair da conta
                </Button>

                <StyledForm onSubmit={handleSubmission}>
                <TextField className='styled-input' 
                    required
                    label="Titulo do post"
                    variant="outlined"
                    value={postTitle}
                    onChange={handlePostTitle} />
                <TextField className='styled-input' 
                    required
                    label="Digite seu post aqui"
                    variant="outlined"               
          
                    value={postText}
                    onChange={handlePostText} />

                <Button 
                    className='styled-button'
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Fazer post
                </Button>
            </StyledForm>

                {posts.map(post => {
                return (
                    <PostCard   key={post.id} id={post.id}>
                        <h3>{post.title}</h3>
                        <h4>Autor: {post.username}</h4>
                        <p>{post.text}</p>
                        <ReactionsContainer>

                            <IconContainer >
                                <StyledImg onClick={() => vote(post.id)} src="https://www.flaticon.com/svg/static/icons/svg/686/686308.svg"/>
                                <p>{post.votesCount}</p>
                            </IconContainer>

                            <IconContainer>
                                <StyledImg src="https://www.flaticon.com/svg/static/icons/svg/1380/1380338.svg"/>
                                <p>{post.commentsCount}</p>
                            </IconContainer>

                        </ReactionsContainer>
                        <Button onClick={() => goToDetails(post.id)}>Ver detalhes</Button>
                       
                    </PostCard>
                )
            })}
        </Container>
    )
}


const Container = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .logout-button {
       position: fixed;
       right: 0;
       top: 10vh;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    .styled-input{
        margin: 1.2rem;
        width: 25vw;
    }
    .styled-button{
        margin: 1.2rem;
        width: 25vw;
        position: static;
    }
    
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
    &:hover{
        transition: 1s;
        box-shadow: 8px 16px 0 rgba(0,0,0,0.2);
        cursor: pointer;
    }
`

const ReactionsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`

const IconContainer = styled.div`
    display: flex;
`

const StyledImg = styled.img`
    height: 2rem;
`