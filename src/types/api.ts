export interface LecturerExperience {
  fieldId: string;
  lecturer_exp_type: string[];
  lecturer_exp_year: string[];
  work_desc: string;
  work_school_name: string;
}

export interface Photo {
  fieldId: string;
  photo: {
    height: number;
    url: string;
    width: number;
  };
}

export interface StudyAbroadExp {
  abroad_exp_country: string;
  abroad_exp_type: string[];
  fieldId: string;
}

export interface TeachSubject {
  fieldId: string;
  teach_level: string[];
  teach_school_year: string[];
  teach_subject: string[];
}

export interface WorkDate {
  day_of_week: string[];
  fieldId: string;
  times: string[];
}

export interface Teacher {
  age: number;
  can_exam_support: string[];
  class_desc: string;
  company_name: string;
  course: string[];
  createdAt: string;
  facluty: string;
  former_school: string;
  gender: string[];
  high_school_club: string;
  high_school_name: string;
  high_school_type: string[];
  hobby: string;
  homework_style: string[];
  id: string;
  industory: string;
  job_category: string;
  lecturer_experience: LecturerExperience[];
  lecturer_pass_record: string;
  middle_school_name: string;
  middle_school_type: string[];
  my_pass_record: string[];
  my_study_style: string[];
  my_study_tendency: string[];
  name: string;
  name_furigana: string;
  photo: Photo[];
  pr_video: string;
  publishedAt: string;
  qualification: string;
  revisedAt: string;
  self_pr: string;
  study_abroad_exp: StudyAbroadExp[];
  talk_theme: string;
  teach_subject: TeachSubject[];
  transfer_class: string[];
  truancy_support: string[];
  updatedAt: string;
  work_date: WorkDate[];
}
