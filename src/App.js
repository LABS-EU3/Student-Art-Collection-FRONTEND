import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// global style
import GlobalStyle from './Styles/GlobalStyle';
// import theme
import theme from './Styles/Theme';
import ResetPasswordForm from './Components/resetPassword/ResetPasswordForm';

import './App.css';
import Spinner from './Components/Spinner';
import Navbar from './Components/NavBar';
import ErrorBoundary from './Components/error-boundary/error-boundary.component';
// import LandingPage from './Views/LandingPage';
// import Register from './Views/Register';
// import ConfirmationSent from './Views/ConfirmationSent';
// import ConfirmationSuccess from './Views/ConfirmationSuccess';
// import PasswordResetSent from './Views/PasswordResetSent';
import Login from './Views/Login';
import Dashboard from './Views/Dashboard';
import PasswordReset from './Components/resetPassword/PasswordReset';
import ContactPage from './Views/Contact';
import BrowseArt from './Views/BrowseArt';
import ArtViewModal from './Views/ArtViewModal';

const LandingPage = lazy(() => import('./Views/LandingPage'));
const Register = lazy(() => import('./Views/Register'));
const ConfirmationSent = lazy(() => import('./Views/ConfirmationSent'));
const ConfirmationSuccess = lazy(() => import('./Views/PasswordResetSent'));
const PasswordResetSent = lazy(() => import('./Views/PasswordResetSent'));

function App (){
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<ErrorBoundary>
					<Route path="/browse" component={ArtViewModal} />
					<Suspense fallback={Spinner}>
						<Route exact path="/" component={LandingPage} />
						<Route path="/signup" component={Register} />
						<Route path="/confirmation" component={ConfirmationSent} />
						<Route path="/success" component={ConfirmationSuccess} />
						<Route path="/resetpasswordsent" component={PasswordResetSent} />
					</Suspense>

					<Route path="/contact" component={ContactPage} />
					<Route path="/resetpasswordrequest" component={ResetPasswordForm} />

					<Route path="/login" component={Login} />

					<Route path="/myaccount" component={Dashboard} />
					<Route path="/selling" component={Dashboard} />

					<Route path="/resetpassword" component={PasswordReset} />
					<Route path="/browse" component={BrowseArt} />
				</ErrorBoundary>
			</Switch>
		</ThemeProvider>
	);
}

export default App;
