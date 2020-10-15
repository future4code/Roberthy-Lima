import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
        nomeUsuario={'Nana'}
        fotoUsuario={'https://as1.ftcdn.net/jpg/02/52/83/90/500_F_252839005_KHiQj68rSeS5CsBrhzXDdQk4NNw051wF.jpg'}
        fotoPost={'https://www.comprerural.com/wp-content/uploads/2017/09/cavalo.jpg'}
        />
        
        <Post
        nomeUsuario={'Yas'}
        fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdCX7MDMfkTrlOdDzo5UvnN0MiYRRPnfIzHg&usqp=CAU'}
        fotoPost={'https://thumbs.dreamstime.com/z/furac%C3%A3o-irritado-dos-desenhos-animados-45854890.jpg'}
        />
      </div>
    );
  }
}

export default App;
