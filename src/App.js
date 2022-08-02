import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookView from "./redux/books/BooksView";
import AddBook from "./redux/books/AddBook";
import EditBoook from "./redux/books/EditBook";
import Error from "./pages/Error";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show-books" element={<BookView />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book" element={<EditBoook />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
