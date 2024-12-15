import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import { Route,Routes } from "react-router-dom";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import EditPostForm from "./features/posts/EditPostForm";
import UserList from "./features/users/UserList";
import UserPage from "./features/users/UserPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

      <Route index element={<PostsList />} />
      <Route path='post'>
        <Route index element={<AddPostForm/>} />
        <Route path=':postId' element={<SinglePostPage/>}/> 
        <Route path="edit/:postId" element ={<EditPostForm/>} />
      </Route>

      <Route path='user'>
        <Route index element={<UserList/>} />
        <Route path=':userId' element={<UserPage/>}/> 
        <Route path="edit/:postId" element ={<EditPostForm/>} />
      </Route>

      </Route>
    </Routes>
    
  )
}

export default App;
