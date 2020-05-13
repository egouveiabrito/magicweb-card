export interface Card {
  'object': string;
  'id': string;
  'oracle_id': string;
  'multiverse_ids': [];
  'name': string;
  'lang': string;
  'released_at': string;
  'uri': string;
  'scryfall_uri': string;
  'layout': string;
  'image': string;
  'image_uris': {
    'small': string;
    'normal': string;
    'large': string;
    'png': string;
    'art_crop': string;
    'border_crop': string;
  };
  'type_line': string;
  'oracle_text': string;
}

