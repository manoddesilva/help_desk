import React from "react";
import { Header } from "../components/Header";
import SearchBar from "../components/mini/SearchBar";
import '../components/CSS/HomePage.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeContent from "../components/HomeContent";


export const Home = () => {
    return (
        <>
         {/* <div className="back">
            <Header></Header>
            <SearchBar />
        </div>  */}
       
          
        <Stack gap={2}>
            <Container>
                <Header></Header>
            </Container>
            
            

            <Container className="tab-pane"> 
                <HomeContent />
            </Container>
            <Container className="search-bar">
                    <SearchBar />
            </Container>
        </Stack>  
            
       
        
         
       

        </>
    )
}