import { compose } from "redux";
import { connect } from "react-redux";
import CollectionsOverview from "./collections-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
