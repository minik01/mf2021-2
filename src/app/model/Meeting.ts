import {Place} from './Place';
import {Person} from './Person';
import {ParticipantGroup} from './ParticipantGroup';

export class Meeting {
  place: Place;
  speaker: Person;
  guests: Person[];
  targetGroup: ParticipantGroup;
}
