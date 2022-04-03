import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import productData from '../assets/fake-data/products'


const Catalog = () => {
    return (
        <Helmet title="Sản phẩm">
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Catalog
