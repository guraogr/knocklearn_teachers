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
  lecturer_experience: {
    fieldId: string;
    lecturer_exp_type: string[];
    lecturer_exp_year: string[];
    work_desc: string;
    work_school_name: string;
  }[];
  lecturer_pass_record: string;
  middle_school_name: string;
  middle_school_type: string[];
  my_pass_record: string[];
  my_study_style: string[];
  my_study_tendency: string[];
  name: string;
  name_furigana: string;
  photo: {
    fieldId: string;
    photo: {
      height: number;
      url: string;
      width: number;
    };
  }[];
  pr_video: string;
  publishedAt: string;
  qualification: string;
  revisedAt: string;
  self_pr: string;
  study_abroad_exp: {
    abroad_exp_country: string;
    abroad_exp_type: string[];
    fieldId: string;
  }[];
  talk_theme: string;
  teach_subject: {
    fieldId: string;
    teach_level: string[];
    teach_school_year: string[];
    teach_subject: string[];
  }[];
  transfer_class: string[];
  truancy_support: string[];
  updatedAt: string;
  work_date: {
    day_of_week: string[];
    fieldId: string;
    time: string[];
  }[];
}
