export interface FlickerSearchConfiguration {
  tags: string;
  perPage: number;
  extras: [string];
  sort: string | 'interestingness-asc'
}

export interface FlickerSearchResults {
  photos: FlickerPhotoResult;
  stats: string
}

export interface FlickerPhotoResult {
  page:number;
  pages:number;
  perpage:number;
  total:number;
  photo: FlickerPhotoPayload[];
}

export interface FlickerPhotoPayload{
  id:string;
  owner:string;
  secret:string;
  server:string;
  farm:number;
  title:string;
  ispublic:boolean;
  isfriend:boolean;
  isfamily: boolean;
  dateupload:string;
  datetaken:string;
  datetakengranularity: number;
  datetakenunknown:number;
  ownername:string;
  views:number;
  url_q:string;
  height_q:number;
  width_q:number
}
