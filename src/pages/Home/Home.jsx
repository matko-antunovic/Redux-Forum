import React, { Component } from "react";
import { connect } from "react-redux";
import {getThreads} from "../../store/actions/threadsAction";
import HomeThreads from "./HomeThreads/HomeThreads";
import loadingGif from "../../loading.gif";

class Home extends Component {
  componentWillMount() {
    this.props.getThreads();
  }

  getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  };

  handlePageChange = page => {
    this.props.getThreads(page.selected + 1);
  };

  render() {
    console.log(this.props.threadsData)
    return (
      <div>
        {!this.props.loading
          ? <HomeThreads
              threads={this.props.threadsData.data}
              handlePageChange={this.handlePageChange}
              pageCount={this.getPageCount(
                this.props.threadsData.total,
                this.props.threadsData.per_page
              )}
              currentPage={this.props.threadsData.current_page - 1}
            />
          : <div className="text-center">
              <img className="img" width="80px" height="80px" src={loadingGif} alt="loading" />{" "}
            </div>}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { threadsData: state.threads, loading: state.threads.loading };
};
const mapDispatchToProps = dispatch => ({
  getThreads: page => {
    dispatch(getThreads(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
