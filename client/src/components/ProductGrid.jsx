import React, { Component } from 'react';
import Product from './Product';
import GridSearch from './GridSearch';
import { Row, Col } from 'react-bootstrap';

class ProductGrid extends Component {
    render() {
        const { search } = this.props
        let allProducts = this.props.products.map((product) => {
            return (
                <Product
                    client={this.props.client}
                    key={product.id.toString()}
                    product={product}
                    {...this.props}
                />
            );
        });

        return (
            <div class="Products">
                <div class="container">
                    <Row>
                        <Col className="product-grid-wrapper" xs="12" md="8" lg="9">
                            <GridSearch
                                {...this.props}
                                products={this.props.products}
                                updateSearch={this.props.updateSearch}
                                updateSearchResults={this.props.updateSearchResults}
                                submitSearch={this.props.submitSearch}
                                search={this.props.search}
                            />
                            <p className="search-results-copy subheader">{search !== '' ? `Showing results for '${search}'...` : 'Showing all products...'}</p>
                            <div className="product">{search !== '' ? this.props.searchResults.map((product) => { return (<Product client={this.props.client} key={product.id.toString()} product={product} />) }) : allProducts}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ProductGrid;