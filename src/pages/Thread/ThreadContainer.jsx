import React, { Component } from "react";

import { connect } from "react-redux";
import { getThread } from "../../store/actions/threadsAction";
import { getReplies } from "../../store/actions/repliesAction";
import SingleThread from "./SingleThread/SingleThread";
import Loader from "../../components/Loader/Loader";

class ThreadContainer extends Component {
  componentWillMount() {
    this.props.getThread(this.props.match.params.id);
    this.props.getReplies(this.props.match.params.id);
  }

  handlePageChange=(page)=>{
    const {id}=this.props.match.params
    this.props.getReplies(id , page.selected +1)
  }

  getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  };


  render() {
    return (
      <div>
        {!this.props.loading
          ? <SingleThread
              thread={this.props.thread}
              replies={this.props.replies}
              handlePageChange={this.handlePageChange}
              getPageCount={this.getPageCount}
            />
          : <Loader />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  thread: state.thread.thread,
  loading: state.thread.loading,
  loadingReplies: state.thread.loadingReplies,
  replies: state.thread.replies
});

const mapDispatchToProps = dispatch => ({
  getThread: id => {
    dispatch(getThread(id));
  },
  getReplies: (id,page) => {
    dispatch(getReplies(id,page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);
