import StoreHeader from '@/components/store-header';
import { HomeWrapper } from './styled';
import ProductList from '@/components/product-list';

export default function HomePage({ products }) {
  return (
    <HomeWrapper>
      <StoreHeader />
      <ProductList products={products} />
    </HomeWrapper>
  );
}
