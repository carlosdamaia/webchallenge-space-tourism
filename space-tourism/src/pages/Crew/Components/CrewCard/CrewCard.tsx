import styles from './CrewCard.module.scss';
import data from '@/assets/data.json';
import { useState } from 'react';
import { crewImages } from '@/types/images';
import AnimatedImage from '../../../../components/AnimatedImage/AnimatedImage';
import AnimatedInfo from '../../../../components/AnimatedInfo/AnimatedInfo';
import Tabs from '@/components/Tabs/Tabs';

const crew = data.crew;

export default function CrewCard() {
    const [selectedCrew, setSelectedCrew] = useState(crew[0])

    return (
        <div className={styles.cardContainer}>
            <div className={styles.crewInfo}>
                <AnimatedInfo 
                    key={selectedCrew.name}
                    className={styles.infoText}
                    duration={.6}
                >
                    <div className={styles.presentation}>
                        <h2 className={styles.role}>
                            {selectedCrew.role}
                        </h2>
                        <h3 className={styles.name}>
                            {selectedCrew.name}
                        </h3>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.bio}>
                            {selectedCrew.bio}
                        </p>
                    </div>
                </AnimatedInfo>
                <Tabs
                    items={crew}
                    selectedItem={selectedCrew}
                    onSelect={setSelectedCrew}
                    getKey={(staff) => staff.name}
                    className={styles.tabs}
                    buttonClassName={styles.tabsButton}
                    activeClassName={styles.active}
                />
            </div>

            <AnimatedImage 
                imageSrc={crewImages[selectedCrew.name]}
                imageAlt=''
                wrapperClassName={styles.imageContainer}
                imageClassName={styles.crewImg}
                uniqueKey={selectedCrew.name}
            />
        </div>
    )
}