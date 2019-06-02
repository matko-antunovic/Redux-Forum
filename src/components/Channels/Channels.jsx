import React, { Component } from "react";
import { connect } from "react-redux";
import getChannels from "../../store/actions/channelsAction";
import ChannelsList from "./ChannelsList/ChannelsList";
import loadingGif from "../../loading.gif";
import Loader from "../Loader/Loader"

class ChannelsContainer extends Component {
  componentWillMount() {
    this.props.getChannels();
  }

  render() {
    return (
      <div>
        {!this.props.loading
          ? <ChannelsList channels={this.props.channels} />
          : <Loader/> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { channels: state.channels.data, loading: state.channels.loading };
};

const mapDispatchToProps = dispatch => ({
  getChannels: () => {
    dispatch(getChannels());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer);
