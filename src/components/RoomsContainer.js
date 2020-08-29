import React from 'react';

import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';

import { withRoomConsumer } from '../Context';

const RoomsContainer = ({ context }) => {

    const { loading, sortedRooms, rooms } = context;

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
};

export default withRoomConsumer(RoomsContainer);

// import React from 'react';

// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';

// import { RoomConsumer } from '../Context';
// import Loading from './Loading';

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     console.log("RoomsContainer -> value", value)

//                     const { loading, sortedRooms, rooms } = value;
//                     if (loading) {
//                         return <Loading />;
//                     }

//                     return (
//                         <div>
//                             Hello from RoomsContaier
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRooms} />
//                         </div>
//                     );
//                 }
//             }
//         </RoomConsumer>


//     );
// };

// export default RoomsContainer;