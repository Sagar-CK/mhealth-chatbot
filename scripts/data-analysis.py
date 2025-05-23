import pandas as pd

## Load data from qualtrics pretask
pre_task = pd.read_csv('survey-data/pretask.csv')

# Dropping unecessary columns, also dropping duplicate response id column and questions such as infromed consent
pre_task = pre_task.drop(columns=['StartDate','EndDate','Status','Progress','Duration (in seconds)','Finished','RecordedDate','DistributionChannel','UserLanguage','SC1','ResponseId','QID1'])

## Load task data from supabase
task_data = pd.read_csv('survey-data/supabase-data.csv')
task_data = task_data.drop(columns=['created_at','revoked_consent','id','timestamp'])

## Load data from qualtrics posttask
post_task = pd.read_csv('survey-data/posttask.csv')
post_task = post_task.drop(columns=['StartDate','EndDate','Status','Progress','Duration (in seconds)','Finished',
                                    'RecordedDate','DistributionChannel','UserLanguage','IPAddress','SC0','ResponseId','RecipientEmail',
                                    'RecipientLastName','RecipientFirstName','ExternalReference','LocationLatitude','LocationLongitude','study_id'])

## Filter out ResponseID from pre_task and post_task if it does not exist in task_data
pre_task = pre_task[pre_task['ResponseID'].isin(task_data['user_id'].values)]
post_task = post_task[post_task['uid'].isin(task_data['user_id'].values)]

## Merge pre_task and post_task data on ResponseID
merged_data = pd.merge(pre_task, post_task, left_on='ResponseID', right_on='uid', suffixes=('_pre', '_post'))
## Merge with task_data on user_id
merged_data = pd.merge(merged_data, task_data, left_on='ResponseID', right_on='user_id', suffixes=('', '_task'))

## Select only rows where study is sagar
study = "sagar"
merged_data = merged_data[merged_data['study'] == study]
merged_data = merged_data.drop(columns=['uid','ResponseID'])

## Drop all columns having null values or empty values
merged_data = merged_data.dropna(axis=1, how='all')

## Save the merged data to a CSV file
merged_data.to_csv(f'results/{study}.csv', index=False)
