import { useState } from "react";
import Modal from "./components/blocks/modal/component";
import Header from "./components/blocks/header/header-wrapper/component";
import MainPage from "./components/blocks/pages/main-page/main-wrapper/component";
import Footer from "./components/blocks/footer/component";
import Catalog from "./components/blocks/pages/catalog/component";
import AboutCompany from "./components/blocks/pages/about-company/component";
import Conditional from "./components/blocks/pages/conditional/component";
import Contacts from "./components/blocks/pages/contacts/component";
import OurProjects from "./components/blocks/pages/our-projects/component";
import ProjectDescription from "./components/blocks/pages/project-description/component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(0);

  const [name, setName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [textareaText, setTextareaText] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setTextareaText(e.target.value);
  };

  const handleOpenModal = (e) => {
    setPosition(e.pageY - e.clientY + 100);
    setIsOpen(true);
  };

  const clearForm = () => {
    setName('');
    setPhoneNumber('');
    setTextareaText('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    
    const dataFromForm = {
      name, 
      phoneNumber,
      message: textareaText,
    }

    console.log(dataFromForm);
    clearForm();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className="site">
        {isOpen && (
          <Modal
            onSubmit={handleSubmit}
            onClick={handleCloseModal}
            onChangeName={handleChangeName}
            onChangePhone={handleChangePhone}
            onChangeMessage={handleChangeMessage}
            name={name}
            phoneNumber={phoneNumber}
            textareaText={textareaText}
            position={position}
          />
        )}
        <Header onClick={handleOpenModal} />
        <Route
          exact
          path="/"
          render={(props) => (
            <MainPage
              {...props}
              onSubmit={handleSubmit}
              onClick={handleOpenModal}
              onChangeName={handleChangeName}
              onChangePhone={handleChangePhone}
              onChangeMessage={handleChangeMessage}
              name={name}
              phoneNumber={phoneNumber}
              textareaText={textareaText}
            />
          )}
        />
        <Route path="/catalog" component={Catalog} />
        <Route path="/about-company" component={AboutCompany} />
        <Route path="/conditional" component={Conditional} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/our-projects" component={OurProjects} />
        <Route path="/project-description/:id" component={ProjectDescription} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
