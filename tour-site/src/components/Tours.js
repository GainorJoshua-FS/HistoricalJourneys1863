import React from 'react'
import TourHelper from '../helpers/TourHelper'

function Tours() {
    return (
        <section>
            <h2>Four Walking Tours</h2>

            <TourHelper
                tour="President Tour"
                time="90-minute tour: "
                desc="Civilian stories of compassion, love, and humor during and after the battle. Stories as: little Charles asks for his candy back, the “safest place” in town, polite and courteous rebels, her “Sweetheart” is found, and more eye-witness stories."
            />

            <TourHelper
                tour="No Man's Land Tour"
                time="90-minute tour: "
                desc="Why was this area in Gettysburg called No Man's Land? Where was No Man's Land? What significance was No Man's Land to the battle? What were the names of the civilians that lived in the area of No Man's Land?"
            />

            <TourHelper
                tour="If the Walls Could Talk Tour"
                time="120-minute tour: "
                desc="See existing buildings and hear true stories of the eye-witness accounts of the civilians and their struggles before, during and the aftermath of the battle. The streets that will be walking are Baltimore Street, the “Square”, Chambersburg Street and Middle Street."
            />

            <TourHelper
                tour="Rebels have Arrived Tour"
                time="120-minute tour: "
                desc="As the Confederate Army enters town, hear the civilian stories of what they first saw and as they tell about the fears they experienced! Walking York and Chambersburg Streets."
            />

            <article>
                <h2>Private Tour Pricings</h2>
                <dl>
                    <dt><strong>Adults</strong></dt>
                    <dd>$20</dd>

                    <dt><strong>Children (6-17)</strong></dt>
                    <dd>$13</dd>

                    <dt><strong>Children (5 & younger)</strong></dt>
                    <dd>FREE</dd>
                </dl>
            </article>

            <article>
                <h2>School Groups & Scout Group Pricings</h2>
                <dl>
                    <dt><strong>Children & Adults</strong></dt>
                    <dd>$10</dd>
                </dl>
            </article>
        </section>
    )
}

export default Tours

const styles = {

}

