function getPeople(handshake) {
    let hands = 0;
    let people = 0;
    while(hands < handshake) {
        people++;
        hands += people;
    }
}