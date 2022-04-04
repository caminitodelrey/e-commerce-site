import TestRenderer from 'react-test-renderer';
import RelatedProducts from '../client/src/components/related-products/RelatedProducts.jsx';

const testRenderer = TestRenderer.create(<RelatedProducts />);
const testInstance = testRenderer.root;

