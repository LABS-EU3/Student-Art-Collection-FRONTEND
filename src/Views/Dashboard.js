import React, { useEffect } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/Actions/actionCreators";

import DashNav from "../Components/DashboardComponents/DashNav";
import Profile from "../Components/DashboardComponents/Profile";
import SellingNav from "../Components/SellingDashboardComponents/SellingNav";
import BuyerOrderItems from "./BuyerOrderItems/BuyerOrderItems";
import SchoolsSoldItems from "./SchoolsSoldItems/SchoolsSoldItems";
import UploadedArt from "../Components/UploadedArtComponent/UploadedArt";
import Messaging from "./Messaging";
import InboxFullView from "../Components/MessagingComponents/InboxFullView";
import SentFullView from "../Components/MessagingComponents/SentFullView";
import Reply from "../Components/MessagingComponents/Reply";
import NewMessage from "../Components/MessagingComponents/NewMessage";
import ConfirmDelete from "../Components/UploadedArtComponent/ConfirmDelete";
import StripeCallBackPage from "./StripePage/CallBackPage";
import PrivateRoute from "../Components/PrivateRoute";

const DashboardContainer = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c7c7c7' fill-opacity='0.26'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 91vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .dashboard {
    width: 85%;
    height: 90%;
    background-color: ${props => props.theme.white};
    box-shadow: 0px 13px 13px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    display: flex;

    @media (max-width: 750px) {
      width: 100%;
      height: 91vh;
    }

    @media (max-width: 500px) {
      flex-direction: column;
      .left-side {
        width: 100%;
      }
    }

    .right-side {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
function Dashboard() {
  return (
    <DashboardContainer>
      <div className="dashboard">
        <div className="left-side">
          <Route path="/myaccount" component={DashNav} />
          <PrivateRoute path="/selling" component={SellingNav} />
        </div>
        <div className="right-side">
          <Route exact path="/myaccount" component={Profile} />
          <PrivateRoute path="/myaccount/orders" component={BuyerOrderItems} />
          <PrivateRoute path="/myaccount/messages" component={Messaging} />
          <PrivateRoute
            exact
            path="/myaccount/received/:id"
            component={InboxFullView}
          />
          <PrivateRoute exact path="/myaccount/reply/:id" component={Reply} />
          <PrivateRoute
            exact
            path="/myaccount/newmessage/:id"
            component={NewMessage}
          />
          <PrivateRoute exact path="/myaccount/sent/:id" component={SentFullView} />
          <PrivateRoute exact path="/selling/sold" component={SchoolsSoldItems} />
          <PrivateRoute
            exact
            path="/myaccount/stripe/registration"
            component={StripeCallBackPage}
          />
          <PrivateRoute
            path="/selling/forsale"
            render={props => <UploadedArt {...props} />}
          />
          <PrivateRoute
            path="/selling/forsale/delete/:id"
            render={props => <ConfirmDelete {...props} />}
          />
        </div>
      </div>
    </DashboardContainer>
  );
}

export default connect(state => state, actions)(Dashboard);
