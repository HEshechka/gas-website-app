// App.jsx
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import Header from './components/StaticComponents/Header/Header.jsx';
import WelcomeSection from './components/MainPage/WelcomeSection/WelcomeSection.jsx';
import AboutCompanySection from './components/MainPage/AboutCompanySection/AboutCompanySection.jsx';
import AdvantageSection from './components/MainPage/AdvantagesSection/AdvantageSection.jsx';
import Footer from './components/StaticComponents/Footer/Footer.jsx';
import AdminDashboard from './components/AdminPage/Dashboard/AdminDashboard.jsx';
import AdminLogin from './components/AdminPage/LoginForm/AdminLogin.jsx';
import ProtectedRoute from './components/AdminPage/ProtectedRoute.jsx';
import ServicesPage from './components/ServicePage/ServicesPage.jsx';
import ProjectsPage from './components/ProjectPage/ProjectsPage.jsx';
import ServicesSection from "./components/MainPage/ServiceSection/ServicesSection.jsx";
import ProjectsSection from "./components/MainPage/ProjectSection/ProjectsSection.jsx";
import ProjectDetailsPage from "./components/ProjectPage/ProjectDetailsPage.jsx";
import './index.css';

function App() {
    return (
        <AuthProvider>
            <Header/>

            <Routes>
                <Route path="/" element={
                    <main>
                        <WelcomeSection/>
                        <AdvantageSection/>
                        <AboutCompanySection/>
                        <ServicesSection/>
                        {/*<ProjectsSection/>*/}
                    </main>
                }/>

                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/projects/:id" element={<ProjectDetailsPage />} />
                <Route path="/admin/login" element={<AdminLogin/>}/>

                <Route
                    path="/admin/*"
                    element={
                        <ProtectedRoute requiredRole="ADMIN">
                            <AdminDashboard/>
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<div>Страница не найдена</div>}/>
            </Routes>

            <Footer/>
        </AuthProvider>
    );
}

export default App;