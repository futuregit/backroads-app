import React from 'react';
import Title from './Title';
import Tour from './Tour';
import { tourlist } from '../data';

function Tours(props) {
    return (
        <section className="section" id="tours">
          <Title title='featured' subTitle='tours' />
  
        <div className="section-center featured-center">
          {tourlist.map((tour) => {
            return <Tour key={tour.id} {...tour} />
          })}
        </div>
      </section>
    );
}

export default Tours;